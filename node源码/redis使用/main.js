import Redis from 'ioredis'

const redis = new Redis({
    host: '127.0.0.1',
    port: 6379
}); 


redis.set('A' , 100);
redis.get('A').then((res) => {console.log(res)});
