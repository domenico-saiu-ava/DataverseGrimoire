---
logical: "msdyn_consoleapplicationtemplate"
display: "Modello di scheda dell'applicazione (deprecato)"
entitySetName: "msdyn_consoleapplicationtemplates"
primaryId: "msdyn_consoleapplicationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di scheda dell'applicazione (deprecato)

Modello della scheda dell'applicazione con vari parametri di modello definiti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationtemplate` |
| Display name | Modello di scheda dell'applicazione (deprecato) |
| Display (plural) | Modelli di scheda dell'applicazione (deprecato) |
| Schema name | `msdyn_consoleapplicationtemplate` |
| Entity set (Web API) | `msdyn_consoleapplicationtemplates` |
| Primary id attribute | `msdyn_consoleapplicationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationtemplates(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationtemplates
PATCH /api/data/v9.2/msdyn_consoleapplicationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationtemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_consoleapplicationtemplateid`, `msdyn_description`, `msdyn_icon`, `msdyn_isstale`, `msdyn_name`, `msdyn_pagetype`, `msdyn_pinned`, `msdyn_templateparameters`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consoleapplicationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consoleapplicationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consoleapplicationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consoleapplicationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `msdyn_pagetype` | `msdyn_PageType` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationtemplate_SyncErrors` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_DuplicateMatchingRecord` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_DuplicateBaseRecord` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_AsyncOperations` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_MailboxTrackingFolders` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_UserEntityInstanceDatas` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_ProcessSession` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_BulkDeleteFailures` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplate` |
| `msdyn_consoleapplicationtemplate_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `objectid` | `objectid_msdyn_consoleapplicationtemplate` |
| `msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | `msdyn_anchortab` | `msdyn_AnchorTab` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationsessiontemplate_m` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemplate_m` |
| `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` |
| `msdyn_msdyn_consoleapplicationtemplate_tags` | [msdyn_templatetags](msdyn_templatetags.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_tags` |

## Source

Generated from [msdyn_consoleapplicationtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationtemplate')) on 2026-05-07.