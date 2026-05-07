---
logical: "aaduser"
display: "Microsoft Entra ID"
entitySetName: "aadusers"
primaryId: "aaduserid"
primaryName: "displayname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Microsoft Entra ID

Virtual entity that represents Microsoft Entra ID

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aaduser` |
| Display name | Microsoft Entra ID |
| Display (plural) | Microsoft Entra IDs |
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

Writable: **19** · Read-only: **0**

### Writable

`aaduserId`, `AccountEnabled`, `BusinessPhones`, `City`, `CompanyName`, `DisplayName`, `GivenName`, `id`, `ImAddresses`, `JobTitle`, `Mail`, `MobilePhone`, `OfficeLocation`, `PostalCode`, `PreferredLanguage`, `StreetAddress`, `surname`, `UserPrincipalName`, `UserType`

## Relationships




## Source

Generated from [aaduser.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aaduser.md) on 2026-05-06.