---
logical: "msdyn_serviceoneprovisioningrequest"
display: "Sales provisioning request"
entitySetName: "msdyn_serviceoneprovisioningrequests"
primaryId: "msdyn_serviceoneprovisioningrequestid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales provisioning request

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_serviceoneprovisioningrequest` |
| Display name | Sales provisioning request |
| Display (plural) | Sales provisioning requests |
| Schema name | `msdyn_serviceoneprovisioningrequest` |
| Entity set (Web API) | `msdyn_serviceoneprovisioningrequests` |
| Primary id attribute | `msdyn_serviceoneprovisioningrequestid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_serviceoneprovisioningrequests?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
POST /api/data/v9.2/msdyn_serviceoneprovisioningrequests
PATCH /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
DELETE /api/data/v9.2/msdyn_serviceoneprovisioningrequests(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_endtime`, `msdyn_name`, `msdyn_operationdefinition`, `msdyn_operationid`, `msdyn_result`, `msdyn_serviceoneprovisioningrequestId`, `msdyn_starttime`, `msdyn_state`, `msdyn_steps`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_serviceoneprovisioningrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_serviceoneprovisioningrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_serviceoneprovisioningrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_serviceoneprovisioningrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_serviceoneprovisioningrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_serviceoneprovisioningrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_serviceoneprovisioningrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_serviceoneprovisioningrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_serviceoneprovisioningrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceoneprovisioningrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_serviceoneprovisioningrequest.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_serviceoneprovisioningrequest.md) on 2026-05-06.