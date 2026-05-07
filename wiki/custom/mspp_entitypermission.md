---
logical: "mspp_entitypermission"
display: "Autorizzazione tabella"
entitySetName: "mspp_entitypermissions"
primaryId: "mspp_entitypermissionid"
primaryName: "mspp_entityname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Autorizzazione tabella

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entitypermission` |
| Display name | Autorizzazione tabella |
| Display (plural) | Autorizzazioni tabella |
| Schema name | `mspp_entitypermission` |
| Entity set (Web API) | `mspp_entitypermissions` |
| Primary id attribute | `mspp_entitypermissionid` |
| Primary name attribute | `mspp_entityname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_entitypermissions?$select=mspp_entityname&$top=10
GET /api/data/v9.2/mspp_entitypermissions(<guid>)
POST /api/data/v9.2/mspp_entitypermissions
PATCH /api/data/v9.2/mspp_entitypermissions(<guid>)
DELETE /api/data/v9.2/mspp_entitypermissions(<guid>)
```

## Attributes

Writable: **21** · Read-only: **0**

### Writable

`mspp_accountrelationship`, `mspp_append`, `mspp_appendto`, `mspp_contactrelationship`, `mspp_create`, `mspp_createdby`, `mspp_createdon`, `mspp_delete`, `mspp_entitylogicalname`, `mspp_entityname`, `mspp_entitypermissionid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_parententitypermission`, `mspp_parentrelationship`, `mspp_read`, `mspp_scope`, `mspp_websiteid`, `mspp_write`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitypermission_parententitypermission` | [mspp_entitypermission](mspp_entitypermission.md) | `mspp_parententitypermission` | `mspp_parententitypermission` |
| `mspp_systemuser_mspp_entitypermission_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_entitypermission_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_mspp_entitypermission` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitypermission_parententitypermission` | [mspp_entitypermission](mspp_entitypermission.md) | `mspp_parententitypermission` | `mspp_parententitypermission` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitypermission_webrole` | [mspp_webrole](mspp_webrole.md) | _n/a_ | `mspp_entitypermission_webrole` |

## Source

Generated from [mspp_entitypermission (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_entitypermission')) on 2026-05-07.