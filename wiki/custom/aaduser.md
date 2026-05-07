---
logical: "aaduser"
display: "Microsoft Entra ID"
entitySetName: "aadusers"
primaryId: "aaduserid"
primaryName: "displayname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Microsoft Entra ID

Entità virtuale che rappresenta Microsoft Entra ID

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aaduser` |
| Display name | Microsoft Entra ID |
| Display (plural) | Microsoft Entra ID |
| Schema name | `aaduser` |
| Entity set (Web API) | `aadusers` |
| Primary id attribute | `aaduserid` |
| Primary name attribute | `displayname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/aadusers?$select=displayname&$top=10
GET /api/data/v9.2/aadusers(<guid>)
POST /api/data/v9.2/aadusers
PATCH /api/data/v9.2/aadusers(<guid>)
DELETE /api/data/v9.2/aadusers(<guid>)
```

## Attributes

Writable: **19** · Read-only: **1**

### Writable

`aaduserid`, `accountenabled`, `businessphones`, `city`, `companyname`, `displayname`, `givenname`, `id`, `imaddresses`, `jobtitle`, `mail`, `mobilephone`, `officelocation`, `postalcode`, `preferredlanguage`, `streetaddress`, `surname`, `userprincipalname`, `usertype`

### Read-only

`createddatetime`

## Relationships




## Source

Generated from [aaduser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aaduser')) on 2026-05-07.