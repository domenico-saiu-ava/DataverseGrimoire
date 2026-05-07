---
logical: "mspp_entitypermission"
display: "Table Permission"
entitySetName: "mspp_entitypermissions"
primaryId: "mspp_entitypermissionid"
primaryName: "mspp_entityname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Table Permission

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entitypermission` |
| Display name | Table Permission |
| Display (plural) | Table Permissions |
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

`mspp_accountrelationship`, `mspp_append`, `mspp_appendto`, `mspp_contactrelationship`, `mspp_create`, `mspp_createdby`, `mspp_createdon`, `mspp_delete`, `mspp_entitylogicalname`, `mspp_entityname`, `mspp_entitypermissionId`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_parententitypermission`, `mspp_parentrelationship`, `mspp_read`, `mspp_scope`, `mspp_websiteid`, `mspp_write`, `statecode`, `statuscode`

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
| `mspp_entitypermission_parententitypermission` | _n/a_ | `mspp_parententitypermission` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitypermission_webrole` | [mspp_entitypermissionid](mspp_entitypermissionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [mspp_entitypermission.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_entitypermission.md) on 2026-05-06.