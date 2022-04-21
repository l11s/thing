var layer = null;
var form = null;
$(function() {
    layui.use('layer', function() {
        layer = layui.layer;
        // layer.area = ['5000px', '300px'];
        // layer.msg('hello');
    });
    layui.use('form', function() {
        form = layui.form;
        // layer.area = ['5000px', '300px'];
        // layer.msg('hello');
    });
    $.ajaxPrefilter((options) => {
        options.url = "http://www.liulongbin.top:3007" + options.url;
        // 是否包含字符
        if (options.url.indexOf('/my/') !== -1) {
            options.headers = {
                Authorization: localStorage.getItem("token") || ""
            };
        }
    });
    layui.use('form', function() {
        // var form = layui.form;
        //监听提交
        form.verify({
            nickname: function(value, item) {
                var t = /^[\S]{6,12}$/
                if (value == "") {
                    return "不能为空"
                }
                if (t.test(value) == false) {
                    return "用户名必须大于6位小于12"
                }
            },
            newpassword: function(value, index) {
                if ($('.oldpassword').val() == value) {
                    return "新旧密码不能一致"
                }
            },
            pwd: function(value, item) {
                var t = /^[\S]{6,12}$/
                if (value == "") {
                    return "不能为空"
                }
                if (t.test(value) == false) {
                    return "密码必须大于6位小于12"
                }
            }
        });
    });
});