# Portal‑OS v4 Deployment Overview

Portal‑OS v4 is deployed using Cloudflare Pages.

The deployment pipeline follows four stages:

1. BUILD — compile the OS
2. DEPLOY — push to Cloudflare Pages
3. EXECUTE — runtime validation
4. VERSION — tag the release

This document explains how Portal‑OS v4 is built, deployed, and versioned.
