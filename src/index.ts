require("dotenv").config();
import { SeoDestemKit } from "@seodestem/core";

const token = process.env.FIGMA_API_KEY;
const fileKey = "eKlOIJ2KZu3yv703EaUJPt";

const kit = new SeoDestemKit(token!);

kit
  .request("GET /v1/files/:key", {
    key: fileKey,
  })
  .then((response) => {
    console.log({ ...response });
  });
