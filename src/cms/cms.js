import CMS from "netlify-cms"

import { UuidControl, UuidPreview } from "./uid.js"

CMS.registerWidget("uuid", UuidControl, UuidPreview)
