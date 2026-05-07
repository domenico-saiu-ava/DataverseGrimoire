---
logical: "msdyn_octag"
display: "Tag"
entitySetName: "msdyn_octags"
primaryId: "msdyn_octagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tag

Tag per la categorizzazione rapida

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_octag` |
| Display name | Tag |
| Display (plural) | tag |
| Schema name | `msdyn_octag` |
| Entity set (Web API) | `msdyn_octags` |
| Primary id attribute | `msdyn_octagid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_octags?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_octags(<guid>)
POST /api/data/v9.2/msdyn_octags
PATCH /api/data/v9.2/msdyn_octags(<guid>)
DELETE /api/data/v9.2/msdyn_octags(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_octagid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_octag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_octag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_octag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_octag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_octag` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_octag_SyncErrors` | [msdyn_octag](msdyn_octag.md) | `regardingobjectid` | `regardingobjectid_msdyn_octag` |
| `msdyn_octag_AsyncOperations` | [msdyn_octag](msdyn_octag.md) | `regardingobjectid` | `regardingobjectid_msdyn_octag` |
| `msdyn_octag_MailboxTrackingFolders` | [msdyn_octag](msdyn_octag.md) | `regardingobjectid` | `regardingobjectid_msdyn_octag` |
| `msdyn_octag_UserEntityInstanceDatas` | [msdyn_octag](msdyn_octag.md) | `objectid` | `objectid_msdyn_octag` |
| `msdyn_octag_ProcessSession` | [msdyn_octag](msdyn_octag.md) | `regardingobjectid` | `regardingobjectid_msdyn_octag` |
| `msdyn_octag_BulkDeleteFailures` | [msdyn_octag](msdyn_octag.md) | `regardingobjectid` | `regardingobjectid_msdyn_octag` |
| `msdyn_octag_PrincipalObjectAttributeAccesses` | [msdyn_octag](msdyn_octag.md) | `objectid` | `objectid_msdyn_octag` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_msdyn_octag` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | _n/a_ | `msdyn_msdyn_cannedmessage_msdyn_octag` |
| `msdyn_msdyn_personalmessage_msdyn_octag` | [msdyn_personalmessage](msdyn_personalmessage.md) | _n/a_ | `msdyn_msdyn_personalmessage_msdyn_octag` |
| `msdyn_msdyn_ocrichobject_msdyn_octag` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | _n/a_ | `msdyn_msdyn_ocrichobject_msdyn_octag` |

## Source

Generated from [msdyn_octag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_octag')) on 2026-05-07.