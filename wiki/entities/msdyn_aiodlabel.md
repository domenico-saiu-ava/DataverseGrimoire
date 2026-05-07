---
logical: "msdyn_aiodlabel"
display: "AI Object Detection Label"
entitySetName: "msdyn_aiodlabels"
primaryId: "msdyn_aiodlabelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIOdLabelId`, `msdyn_LabelString`, `msdyn_name`, `msdyn_SourceAttributeLogicalName`, `msdyn_SourceEntitySetName`, `msdyn_SourceRecordId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aiodlabel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aiodlabel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodlabel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodlabel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodlabel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aiodlabel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aiodlabel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aiodlabel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodlabel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodlabel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodlabel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aiodlabel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aiodlabel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodlabel_msdyn_aiodtrainingboundingbox` | _n/a_ | `msdyn_aiodlabelid` | _n/a_ |
| `msdyn_aiodlabel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiodlabel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodlabel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodlabel_msdyn_aiconfiguration` | [msdyn_aiodlabelid](msdyn_aiodlabelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_aiodlabel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiodlabel.md) on 2026-05-06.