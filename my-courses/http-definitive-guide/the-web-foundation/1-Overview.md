# HTTP: The Internet's Multimedia Courier

- Billions of JPEG images, HTML pages,..through the Internet each and every day.
- Because HTTP uses reliable data-transmission protocols, it guarantees that your data will not be damaged in transit.

# Web Clients and Servers

- Web content lives on web servers. Web servers speak the HTTP protocol, so they are often called HTTP servers.
- These HTTP servers store the Internet's data and provide the data when it is requested by HTTP clients.
- The clients send HTTP request to servers, and servers return the requested data in HTTP responses. Together, HTTP clients and HTTP servers makeup the basic components of the World Wide Web.

# Resources

- A web server host web resources. The simplest kind of web resource is a static file on the web server's file system. These files can contain anything, any format
- However, resources don't have to be static files. Resources can also be software programs that generate content on demand. These dynamic content resources can generate content base on your identity, what info you've requested

# Media Types

- Because the Internet hosts many thousands of different data types, HTTP carefully tags each object being transported through the Web with a data format label called a _MIME_ type
- Web servers attach a MIME type to all HTTP object data. When a web browser gets an object back from a server, it looks at the associated MIME type to see if it knows how to handle the object.
  > A MIME type is a textual label, represented as a primary object and a specific subtype
  >
  > - HTML: text/html
  > - ASCII text: text/plain
  > - JPEG images: image/jpeg
  > - ...

# URIs

- Each web server resource has a name, so the clients can point out what resources they are interested in.
- The server resource name is called a _uniform resource identifier_, or URI. URI like the postal addresses of the Internet, uniquely identifying and locating information resources around the world. URI come in two flavors, called URLs and URNs.
- ### URLs
  The _uniform resource locator_ is the most common form of resource identifier. URLs describe the specific location of a resource on a particular server.
  - The first part of the URL is called the _scheme_ and it describes the protocol (_http://_).
  - The second part gives the server Internet address. (*www.longbuibao.com*)
  - The rest names a resource on the web server (_/specials/image.jpg_)
- ### URNs
  The second flavor of URI is the _uniform resource name_, or URN. A URN serves as a unique name for a particular piece of content, independent of where the resource currently resides, allow resources to move from place to place.
  URN are still experimental and not yet widely adopted.

**use URI and URL interchangeably is allowed**

# Transaction

An HTTP transaction consists of a request command (sent from client to server), and a response result (sent form the server back to the client). This communication happens with formatted blocks of data called _HTTP messages_

# Methods

HTTP supports several different request commands, called _HTTP methods_. Every HTTP request message has a method. The method tells the server what action to perform (fetch a web page, run a gateway program, delete a file,...)

# Status code

Every HTTP response message comes back with a status code

> 200 OK. Document returned correctly
> 302 Redirect. Go some place else to get the resource
> 404 Not Found. Can't find this resource

# Web Pages Can Consist of Multiple Objects

An application often issues multiple HTTP transactions to accomplish a task. The browser performs one transaction to fetch the HTML "skeleton", then issues additional HTTP transactions for each embedded image,...These embedded resources might event reside on different servers

# Messages

- HTTP messages are simple, line-oriented sequences of characters.
- HTTP messages sent from web clients to web servers are called _request messages_. Messages from servers to clients are called _response messages_
- HTTP messages consist of three parts: - _Start line_: The first line of the message is the start line, indicating what to do for a request or what happened for a response. - _Header fields_: Zero or more header fields follow the start line. Each header field consists of a name and a value, separated by a colon (:). The headers end with a blank line. - _Body_: After the blank line is an optional message body containing any kind of data. The body may can contain a binary data (images, videos, audio,...) and also can contain text.

# Proxies

- A proxy sits between a client and a server, receiving all of the client's HTTP requests and relaying the requests to the server (perhaps after modifying the requests). These applications act as a proxy for the user, accessing the server on the user's behalf.

# Caches

A _web cache_ or _caching proxy_ is a special type of HTTP proxy server that keeps copies of popular documents that pass through the proxy. The next client requesting the same document can be served from the cache's personal copy.

# Gateways

- _Gateways_ are special servers that act as intermediaries for other servers. They are often used to convert HTTP traffic to another protocol. For example, an HTTP/FTP gateway receives requests for FTP URIs via HTTP requests but fetches the documents using the FTP protocol then packed into an HTTP message and sent to the client.

# Tunnels

- HTTP applications that, after setup, blindly relay raw data between two connections. HTTP tunnels are often used to transport non-HTTP data over one or more HTTP connections, without looking at the data.
- One popular use of HTTP tunnels is to carry encrypted SSL traffic through an HTTP connection, allowing SSL traffic through corporate firewalls that permit only web traffic.

# Agents

- Semi-intelligent web clients that make automated HTTP requests
