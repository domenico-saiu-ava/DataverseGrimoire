---
logical: "languageprovisioningstate"
display: "Language Provisioning State"
entitySetName: "languageprovisioningstates"
primaryId: "languageprovisioningstateid"
tableType: "Standard"
ownership: "None"
---

# Language Provisioning State

Container for language provisioning checkpoint states

## Identity

| Property | Value |
| --- | --- |
| Logical name | `languageprovisioningstate` |
| Display name | Language Provisioning State |
| Display (plural) | Language Provisioning States |
| Schema name | `LanguageProvisioningState` |
| Entity set (Web API) | `languageprovisioningstates` |
| Primary id attribute | `languageprovisioningstateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/languageprovisioningstates?$select=&$top=10
GET /api/data/v9.2/languageprovisioningstates(<guid>)
POST /api/data/v9.2/languageprovisioningstates
PATCH /api/data/v9.2/languageprovisioningstates(<guid>)
DELETE /api/data/v9.2/languageprovisioningstates(<guid>)
```

## Attributes

Writable: **6** · Read-only: **0**

### Writable

`ApplicationVersion`, `LanguageId`, `LanguageProvisioningStateId`, `ProvisioningStage`, `SolutionFileVersion`, `SolutionUniqueName`

## Relationships




## Source

Generated from [languageprovisioningstate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/languageprovisioningstate.md) on 2026-05-06.