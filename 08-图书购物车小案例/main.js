const app = new Vue({
  el: "#app",
  data: {
    books: [{
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  computed: {
    totalPrice () {
        let total = 0;
        for (let i = 0; i < this.books.length; i++) {
          total = total + this.books[i].price * this.books[i].count
        }
        return total
      }
  },
  methods: {
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
      if(this.books[index].count===0){
        this.books.splice(index,1)
      }
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  filters:{//过滤器
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})