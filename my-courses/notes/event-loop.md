# The Message Queue
The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like `onload`.

**The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.**

> Message Queue là nơi mà các sự kiện click, hoặc các sự kiện bàn phím, hoặc là các sự kiện ở DOM như là `onload`
> Nhưng mà đối với MQ thì Event Loop sẽ ưu tiên các hàm ở call stack trước, tức là nó chạy hết tất cả các hàm có trong call stack rồi mới chạy các hàm đã xếp trong message queue

# ## ES6 Job Queue
ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

> Một khái niệm mới là Job Queue, được sử dụng bởi Promise, là một cơ chế mà thực hiện cái kết quả của một hàm bất đồng bộ nhanh nhất có thể, bất cứ lúc nào có thể, hơn là đặt hàm bất đồng bộ đó ở cuối call stack

[event loop](https://www.youtube.com/watch?v=8zKuNo4ay8E)
