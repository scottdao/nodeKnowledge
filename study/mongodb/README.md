- nosql
memcached缓存数据库与redies缓存数据库区别
neo4j图形数据库

./mongod  --shutdown 关闭进程
 - 开启 mongo 数据库
  `mongod --dbpath D:\study\github\nodeKnowledge\study\mongodb\db --port 27018`;
- mongod 关闭.`mongod  --shutdown`;
- mongod 配置文件启动：
  1. `logpath=/ldy/mongodb/log/mongodb.log // 日志文件；
        logappend=false 
        dbpath=/ldy/mongodb/data/db // 数据文件；
        fork=true // 后台，开启子父进程；
        rest=true // 是否开启web控制台； 
        `
  -  mongodb之shell脚本
   1. /mongo/bin/mongo:启动mongo，开启shell脚本。
   2. show dbs --- 已有数据库列表
   3. use dbname 切换并创建数据库
   4. db.account.drop() 删除集合
   5. db.dropDatabase() 删除数据库
   6. show collections  已有集合列表
   7. db.account.find() 查询数据
   8. db.account.save({条件})存数据
   - mongodb之工具
   1. 数据库备份：mongodump   -h  dbhost  -d dbname  -o dbdirectory
   2. 查看备份数据库的数据：bsondump 
   `./bsondump  ./dump/ldy/account.bson`
   3. 恢复数据库：mongorestore -h dbhost -d dbname --dbdirectoryperdb  dbdirectory
   4. 数据导出：mongoexport  
   ```
   ./mongoexport -d ldy -c account -q {条件} -f name,add （属性）--type=csv > account.csv
   ```
   5. 数据导入：mongoimport
   ```
    ./mongoimport  -d ldy  -c account  --type csv --headerline --drop< account.csv
   ```