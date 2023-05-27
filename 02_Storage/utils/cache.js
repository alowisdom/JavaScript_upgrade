class cacheStorage {

    // 设置storage
    setCache(key,value){
        if(!key){
            throw new Error()
        }
        if(value){
            const newValue = JSON.stringify(value)
            localStorage.setItem(key,newValue)
        }
    }

    // 获取 storage
    getCache(key){
        const result = localStorage.getItem(key)
        if(result){
            return JSON.parse(result)
        }
    }

    // 获取索引

    // 清除缓存

}

const localCache = new cacheStorage()
