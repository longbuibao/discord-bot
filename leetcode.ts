import { values } from 'core-js/core/array'

const nums = [-1, 0, 1, 2, -1, -4]

function threeSum(nums: number[]): number[][] {
  function sum(nums: number[]) {
    return nums.reduce((acc, cur): number => {
      return acc + cur
    }, 0)
  }

  const twoDimension: number[][] = []

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length; j++) {
      const ele = [nums[i], nums[j]]
      twoDimension.push(ele)
    }
  }

  return twoDimension.map((values) => {})
}

console.log(threeSum(nums))
