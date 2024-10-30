const wrapper = document.querySelector('.wrapper')
console.log(wrapper);

// 注册链接
const signUp = document.querySelector('#up-link')
// 登录链接
const signIn = document.querySelector('#in-link')
const logBtn = document.querySelector('#log-btn')
signUp.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('前往注册');
    wrapper.classList.toggle('showUp')
    console.log(wrapper);

})
signIn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('前往登录');
    wrapper.classList.toggle('showUp')
    console.log(wrapper);
    logBtn.classList.toggle('active')

})
logBtn.addEventListener('click', () => {
    // console.log('隐藏按钮');
    logBtn.classList.toggle('active')
    wrapper.classList.toggle('showUp')

})


