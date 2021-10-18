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
