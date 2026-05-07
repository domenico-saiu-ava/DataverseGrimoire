---
logical: "msdyn_dmsrequest"
display: "Data Movement Service Request"
entitySetName: "msdyn_dmsrequests"
primaryId: "msdyn_dmsrequestid"
primaryName: "msdyn_requestuniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Movement Service Request

Table for Data Movement Service Requests

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmsrequest` |
| Display name | Data Movement Service Request |
| Display (plural) | Data Movement Service Requests |
| Schema name | `msdyn_dmsrequest` |
| Entity set (Web API) | `msdyn_dmsrequests` |
| Primary id attribute | `msdyn_dmsrequestid` |
| Primary name attribute | `msdyn_requestuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmsrequests?$select=msdyn_requestuniquename&$top=10
GET /api/data/v9.2/msdyn_dmsrequests(<guid>)
POST /api/data/v9.2/msdyn_dmsrequests
PATCH /api/data/v9.2/msdyn_dmsrequests(<guid>)
DELETE /api/data/v9.2/msdyn_dmsrequests(<guid>)
```

## Attributes

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AdditionalProperties`, `msdyn_CdmEntityInformation`, `msdyn_CdmToDataverseEntityMapping`, `msdyn_CorrelationId`, `msdyn_DatalakeFolderName`, `msdyn_DataverseEntityInformation`, `msdyn_dmsrequestId`, `msdyn_ModelJsonPath`, `msdyn_RequestParameters`, `msdyn_RequestType`, `msdyn_RequestUniqueName`, `msdyn_UserObjectId`, `msdyn_UserTenantId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dmsrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dmsrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmsrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmsrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmsrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dmsrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dmsrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dmsrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmsrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequest_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dmsrequest_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dmsrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dmsrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_uploadrequest_jobstatus` | _n/a_ | `msdyn_lookupfield_uploadrequest` | _n/a_ |


## Source

Generated from [msdyn_dmsrequest.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dmsrequest.md) on 2026-05-06.