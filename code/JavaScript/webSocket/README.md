### WebSocket

#### WebSocket 建立连接

![header](./images/header.png)

这是一个 `http get` 请求报文，注意该报文中有一个 `upgrade`首部，它的作用是告诉服务端需要将通信协议切换到 `websocket`。

如果服务端支持 websocket 协议，那么它就会将自己的通信协议切换到 websocket，同时发给客户端一个响应报文头。

返回的状态码为 101，表示同意客户端协议转换请求，并将它转换为 websocket 协议。

以上过程都是利用 http 通信完成的，称之为 websocket 协议握手(websocket Protocol handshake)

总结：websocket 握手需要借助于 http 协议，建立连接后通信过程使用 websocket 协议。

### 参考链接

- [初步认识 WebSocket 技术](http://www.52im.net/forum.php?mod=viewthread&tid=331&ctid=15)
