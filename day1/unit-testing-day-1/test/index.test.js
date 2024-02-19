// import { sum,stringReverse,fibonacci,removeDuplicate} from "../index.js";
import {capitalizeText,createArray} from "../Lab/index.js";
import { assert } from "chai"; // Using Assert style
import { expect } from "chai"; // Using Expect style
import { should } from "chai"; // Using Should style


//suite
//sum
// describe("sum function", function () {
//   //testcases
//   it("test that if i pass 2,3 result should be 5", function () {
//     //Matchers
//     //expect style
//     // expect(sum(2,3)).to.be.equal('5')
//     // assert style
//     // assert.equal(sum(2,3),5)
//     // Should style
//       sum(2,3).should.equal(5)
//   });

//   it("test that if i pass -2,-3 result should be -5",function(){
//       expect(sum(-2,-3)).to.be.equal(-5)
//   })
// //   it('if passing string',function(){
// //       expect(sum('ahmed','omar')).to.be.equal('ahmedomar')
// //   })
//   it('test that function throw error if parameters are strings',()=>{
//       expect(function(){
//         sum('ahmed','omar')
//       }).to.throw()
//   })
//   it('return number',function(){
//       expect(sum(2,3)).to.be.a('number')
//   })
// });

// describe('test stringReverse',function(){
//     it('testing return reversed string',function(){
//         expect(stringReverse('hi')).to.be.equal('ih')
//     })
//     it('testing return a string',function(){
//         expect(stringReverse('hi')).to.be.a('string')
//     })
//     it('testing includes m if amira is passed',function(){
//         expect(stringReverse('amira')).to.be.include('m')
//     })
// })

// describe('fibonacci function',()=>{
//     it('test id parameter is negative number should return null',()=>{
//         expect(fibonacci(-2)).to.equal(null)
       
//     })
//     it('test id parameter is string should return null',()=>{
//         expect(fibonacci('a')).to.equal(null)
       
//     })
//     it('test id parameter is zero should return zero',()=>{
//         expect(fibonacci(0)).to.equal(0)
       
//     })
//     it('test id parameter is less than or equal to 2 should return 1',()=>{
//         expect(fibonacci(2)).to.equal(1)
       
//     })
//    it('if passed number should return correct value',()=>{
//        expect(fibonacci(6)).to.equal(8)
//    })
// })

// describe('test removeDuplicate',function(){
//     it('thest reutrn type is array',function(){
//         expect(removeDuplicate([1,2,2,3,4,4])).to.be.an('array')
//     })
//     it('thest reutrn include spacific value',function(){
//         expect(removeDuplicate([1,2,2,3,4,4])).to.be.include(4)
//     })
//     it('thest reutrn array after remove duplicate',function(){
//         expect(removeDuplicate([1,2,2,3,4,4])).to.deep.equal([1,2,3,4])
//     })

//     it('thest reutrn type is array,thest reutrn include spacific value',function(){
//         //chain test cases
//         expect(removeDuplicate([1,2,2,3,4,4])).to.be.an('array').to.be.include(4)
//     })
   
// })


//problem 1
describe('test capitalizeText',function(){
    it('testing if it takes a string will return a string',function(){
        expect(capitalizeText('mostafa')).to.be.a('string')
    })
    it('testing takes a string and return it after capitalize it',function(){
        expect(capitalizeText('mostafa')).to.be.a('string').to.be.equal('MOSTAFA')
    })
    it('test that function throw type error if takes number ',()=>{
        expect(function(){
            capitalizeText(5)
        }).to.throw()
    })
})



//problem 2
describe('test createArray',function(){
    it('return value of type array',function(){
        expect(createArray(3)).to.be.an('array')
        // assert.typeOf(createArray(3), 'array');
    })
    it('if we pass 3 it will return array of length 3 and it include 1',function(){
        expect(createArray(3)).to.have.lengthOf(3).to.be.include(1);
        // createArray(3).should.have.lengthOf(3);
    })
    it('pending test case')

    
   
})






