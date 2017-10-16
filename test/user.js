var should = require('should')
var user = require('../src/user.js')
describe('user', function(done){

  it('saves properly', function(done){
    user.save('ok', 'pwd', function(err){
      should.not.exist(err)
      done()
    })
  })

  it('doesn\'t save properly', function(done){
    user.save('only name', function(err){
      should.exist(err)
      done()
    })
  })

  it('get', function(done){
    done()
  })
})
