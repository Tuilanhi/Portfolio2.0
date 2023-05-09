---
description: TCP Request Channel using multi-threaded communication
public: true
layout: ../../layouts/BlogPost.astro
title: TCP Request Channel
shortDescription: C++ Software | 2022
createdAt: 1663138523826
updatedAt: 1663138544071
heroImage: /threading.PNG
slug: tcp-request-channel
code: C++
source: https://github.com/Tuilanhi/tcp-request
---

The TCP Request Channel connects between the client and server processes by instructing server channel to listen for requests from client's channel for patients' ECG values. The performance of the processes also increases by implementing multi-threaded communication that allows up to 1000 threads to run concurrently. Producer and consumer relationship is also established through using queue and mutex to create two buffers, one for responding and the other for requesting information.
