# Smilo Plugin for Remix

The Smilo plugin for Ethereum's Remix IDE adds support for creating and interacting with private contracts on a Smilo network.

![screenshot](./images/Smilo-remix.png "screenshot")

## Getting Started

Just go to the [Remix IDE](https://remix.ethereum.org) and activate the **Smilo Network** plugin on the plugins page. For step-by-step instructions, go to the [Getting Started](../GettingStarted) doc.

## Common Issues

**HTTP/HTTPS:**
- Most browsers will not allow you to connect to an HTTP resource if you are currently on an HTTPS page. Since our plugin is currently loaded from HTTPS, it will not let you connect to a Smilo node that doesn't have an https url. **Chrome makes an exception for localhost**, so you should be able to connect to http://localhost:22000, for example. Firefox seems to be a little more strict than Chrome at the moment and does not allow these localhost calls. We are tracking this issue in [Smilo-remix#8](https://github.com/smilofoundation/Smilo-remix/issues/8), but until that is fixed please use Chrome or another browser that doesn't block these requests. 

## Contributing
Smilo Plugin for Remix is built on open source and we invite you to contribute enhancements. Upon review you will be required to complete a Contributor License Agreement (CLA) before we are able to merge. If you have any questions about the contribution process, please feel free to send an email to [info@smilo.foundation](mailto:info@smilo.foundation).
