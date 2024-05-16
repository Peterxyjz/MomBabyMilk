import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = `mongodb+srv://passSWP301:passSWP301@mombabymilk.lrg7esv.mongodb.net/?retryWrites=true&w=majority&appName=MomBabyMilk`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
class DatabaseService {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  async connect() {
    try {
      // kết nối mình với server mongo	(optional từ phiên bản 4.7 nên mình xóa đi cũng oke)
      // await client.connect()
      // gữi tính hiệu kết nối lên server
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    } // finally {
    // Ensures that the client will close when you finish/error
    //await this.client.close()
    //} // k dùng finally vì như vậy sau khi kết nối nó sẽ đóng lại luôn,
    //và mình sẽ k thể gữi request đc nữa
  }
}

//từ class tạo object và export nó ra ngoài
const databaseService = new DatabaseService()
export default databaseService
