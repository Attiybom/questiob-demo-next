# SSR的两种形式
1. 静态直出html - 如提交失败的页面 - static generation - 项目构建时，直接产出html文件
2. 动态拼接html - service-side render - 根据每次请求动态生成html文件
# getStaticProps & getServerSideProps
1. getStaticProps 只有在build才会执行一次，因此线上环境后，不会每次请求都执行
2. getServerSideProps 线上环境，每次请求都会执行

#  动态路由，获取url参数
1. 创建[params]文件
# B端和C端的url要统一
1. B端复制的访问c端的url：http://localhost:3000/question/360000202306055213
2. C端建立起的获取参数url形式：http://localhost:3000/question/12133
3. 这样复制c端的访问链接时，C端就能获取到传过来的id
