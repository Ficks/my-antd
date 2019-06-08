import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './Login.less';
import {
  Scene,
  WebGLRenderer,
  SpriteMaterial,
  Sprite,
  PerspectiveCamera,
} from 'three';
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault ();
    this.props.form.validateFields ((err, values) => {
      if (!err) {
        console.log ('Received values of form: ', values);
      }
    });
  };

  loginBg () {
    var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
    var camera, scene, renderer; //相机，场景，渲染器
    var particles, particle, count = 0;
    var mouseX = 0, mouseY = -438; //设置初始位置
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    init ();
    animate ();
    function init () {
      camera = new PerspectiveCamera (
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 1000;

      console.log (camera.position.x, camera.position.y, camera.position.z);
      scene = new Scene ();
      particles = new Array ();
      var material = new SpriteMaterial ({
        color: 0x097bdb,
      });
      var i = 0;
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new Sprite (material);
          particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
          particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;
          scene.add (particle);
        }
      }

      var width = document.getElementById ('canvas-login-bg').clientWidth;
      var height = document.getElementById ('canvas-login-bg').clientHeight;
      renderer = new WebGLRenderer ({
        antialias: true,
        alpha: true, //设置背景透明
      });
      renderer.setSize (width, height);
      document
        .getElementById ('canvas-login-bg')
        .appendChild (renderer.domElement);

      console.log ('renderer.domElement' + renderer.domElement);

      renderer.setClearColor (0x13194b); //设置背景色
      document.addEventListener ('mousemove', onDocumentMouseMove, false);
      document.addEventListener ('touchstart', onDocumentTouchStart, false);
      document.addEventListener ('touchmove', onDocumentTouchMove, false);
      window.addEventListener ('resize', onWindowResize, false);

      camera.position.x = 133.99999999999972;
      camera.position.y = 437.99999999999943;
      camera.lookAt (scene.position);
      renderer.render (scene, camera);
    }
    function onWindowResize () {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix ();
      renderer.setSize (window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove (event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = -438;
    }
    function onDocumentTouchStart (event) {
      if (event.touches.length === 1) {
        event.preventDefault ();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }
    function onDocumentTouchMove (event) {
      if (event.touches.length === 1) {
        event.preventDefault ();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function animate () {
      requestAnimationFrame (animate);
      render ();
    }
    function render () {
      //移动相机形成动画
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt (scene.position);
      var i = 0;
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin ((ix + count) * 0.3) * 50 +
            Math.sin ((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin ((ix + count) * 0.3) + 1) * 4 +
            (Math.sin ((iy + count) * 0.5) + 1) * 4;
        }
      }

      renderer.render (scene, camera);
      count += 0.1;
    }
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="login">
        <div id="canvas-login-bg" />
        <div className="box">
          <h1>登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator ('username', {
                rules: [{required: true, message: '请输入您的手机号码!'}],
              }) (
                <Input
                  onInput={this.onInput}
                  prefix={
                    <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator ('password', {
                rules: [{required: true, message: '请输入您的密码!'}],
              }) (
                <Input
                  prefix={
                    <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <div className="wjpwd">
                {getFieldDecorator ('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                }) (<Checkbox>记住密码</Checkbox>)}
                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </div>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
              <a href="">去注册</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.loginBg ();
  }
}

var LoginView = Form.create ({name: 'login'}) (Login);
export default LoginView;
