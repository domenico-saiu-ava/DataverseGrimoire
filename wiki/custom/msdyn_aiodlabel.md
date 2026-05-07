---
logical: "msdyn_aiodlabel"
display: "AI Object Detection Label"
entitySetName: "msdyn_aiodlabels"
primaryId: "msdyn_aiodlabelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Object Detection Label

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiodlabel` |
| Display name | AI Object Detection Label |
| Display (plural) | AI Object Detection Labels |
| Schema name | `msdyn_AIOdLabel` |
| Entity set (Web API) | `msdyn_aiodlabels` |
| Primary id attribute | `msdyn_aiodlabelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiodlabels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiodlabels(<guid>)
POST /api/data/v9.2/msdyn_aiodlabels
PATCH /api/data/v9.2/msdyn_aiodlabels(<guid>)
DELETE /api/data/v9.2/msdyn_aiodlabels(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aiodlabelid`, `msdyn_labelstring`, `msdyn_name`, `msdyn_sourceattributelogicalname`, `msdyn_sourceentitysetname`, `msdyn_sourcerecordid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiodlabel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodlabel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodlabel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodlabel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aiodlabel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aiodlabel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aiodlabel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aiodlabel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodlabel_SyncErrors` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_DuplicateMatchingRecord` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_DuplicateBaseRecord` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `baserecordid` | `baserecordid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_AsyncOperations` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_MailboxTrackingFolders` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_UserEntityInstanceDatas` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `objectid` | `objectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_ProcessSession` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_BulkDeleteFailures` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_PrincipalObjectAttributeAccesses` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `objectid` | `objectid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_msdyn_aiodtrainingboundingbox` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `msdyn_aiodlabelid` | `msdyn_AIOdLabelId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodlabel_msdyn_aiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | _n/a_ | `msdyn_aiodlabel_msdyn_aiconfiguration` |

## Source

Generated from [msdyn_aiodlabel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiodlabel')) on 2026-05-07.