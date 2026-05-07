---
logical: "msdyn_crmactivitymapping"
display: "CRM Activity Mapping"
entitySetName: "msdyn_crmactivitymappings"
primaryId: "msdyn_crmactivitymappingid"
primaryName: "msdyn_exchangeitemid"
tableType: "Standard"
ownership: "UserOwned"
---

# CRM Activity Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_crmactivitymapping` |
| Display name | CRM Activity Mapping |
| Display (plural) | CRM Activity Mappings |
| Schema name | `msdyn_crmactivitymapping` |
| Entity set (Web API) | `msdyn_crmactivitymappings` |
| Primary id attribute | `msdyn_crmactivitymappingid` |
| Primary name attribute | `msdyn_exchangeitemid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_crmactivitymappings?$select=msdyn_exchangeitemid&$top=10
GET /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
POST /api/data/v9.2/msdyn_crmactivitymappings
PATCH /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
DELETE /api/data/v9.2/msdyn_crmactivitymappings(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_additionalfields`, `msdyn_crmactivityid`, `msdyn_crmactivitymappingId`, `msdyn_crmactivitytype`, `msdyn_crmorgurl`, `msdyn_crmrelatedrecordupdatedtime`, `msdyn_exchangeitemid`, `msdyn_exchangeitemtype`, `msdyn_lastsyncsnapshot`, `msdyn_metadata`, `msdyn_regardingobjectid`, `msdyn_regardingobjecttype`, `msdyn_trackstatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_crmactivitymapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_crmactivitymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_crmactivitymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_crmactivitymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_crmactivitymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_crmactivitymapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_crmactivitymapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_crmactivitymapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_crmactivitymapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmactivitymapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmactivitymapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_crmactivitymapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_crmactivitymapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmactivitymapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_crmactivitymapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_crmactivitymapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_crmactivitymapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_crmactivitymapping.md) on 2026-05-06.