import './style.css'
import axios from 'axios'



// 向给定ID的用户发起请求
axios.get('https://apifoxmock.com/m1/4000302-3636257-default/me')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });

