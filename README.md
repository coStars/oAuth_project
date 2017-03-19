
## 1. oAuth

### What is oAuth (Open Authentication)

OAuth is an open standard/protocol for authorization, a simple way to publish and interact with protected data. It's also a safer and more secure way for people to give you access.

OAuth also enables Resource Owners (end users) to authorize limited third-party access to their server resources without sharing their credentials.

**Recap**
>OAuth allows notifying a resource provider (e.g. Facebook) that the resource owner (e.g. you) grants permission to a third-party (e.g. a Facebook Application) access to their information (e.g. the list of your friends).

### Before using oAuth

   * Users had to provide email or username and password for each site during the initial creation of a profile.
   * Users would often forget their passwords during the login process since they had created multiple profiles at different sites.
   * Users would often create fake profiles that would provide inaccurate tracking data to media sites.

**Simple example of oAuth**

![alt text](http://www.forumsys.com/wp-content/uploads/2013/12/OAuth.jpg)

**oAuth for our built application**

![alt text](http://1.bp.blogspot.com/-RWUcOc3n9V4/URFI6k-9xII/AAAAAAAABDQ/P7yIh-wmttA/s1600/Screen+Shot+2013-02-05+at+11.31.00+PM.png)

**Three-legged oAuth Model**

![alt text](http://jlabusch.github.io/oauth2-server/img/diag_rfc_abstract_flow.png)

### Benefits of using oAuth

    OAuth allows:

   * Users get to make explicit decisions about what information they share, and with who
   * Resource Servers can integrate with third parties without exposing Resource Owner credentials.
