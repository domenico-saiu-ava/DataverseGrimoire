---
logical: "msdyn_activitymapping"
display: "Activity Mapping"
entitySetName: "msdyn_activitymappings"
primaryId: "msdyn_activitymappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Activity Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activitymapping` |
| Display name | Activity Mapping |
| Display (plural) | msdyn_activitymappings |
| Schema name | `msdyn_activitymapping` |
| Entity set (Web API) | `msdyn_activitymappings` |
| Primary id attribute | `msdyn_activitymappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activitymappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activitymappings(<guid>)
POST /api/data/v9.2/msdyn_activitymappings
PATCH /api/data/v9.2/msdyn_activitymappings(<guid>)
DELETE /api/data/v9.2/msdyn_activitymappings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_activitycontent`, `msdyn_activityid`, `msdyn_activitymappingId`, `msdyn_activitytype`, `msdyn_conversationid`, `msdyn_internetmessageid`, `msdyn_name`, `msdyn_regardingobjectid`, `msdyn_regardingobjectidIdType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_activitymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_activitymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activitymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activitymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activitymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_activitymapping_lead` | [lead](lead.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_lead` |
| `msdyn_activitymapping_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_opportunity` |
| `owner_msdyn_activitymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_activitymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_activitymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activitymapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activitymapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activitymapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_activitymapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_activitymapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activitymapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_activitymapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activitymapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotemailinsight_msdyn_activitymapping_msdyn_activitymappingid` | _n/a_ | `msdyn_activitymappingid` | _n/a_ |


## Source

Generated from [msdyn_activitymapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_activitymapping.md) on 2026-05-06.