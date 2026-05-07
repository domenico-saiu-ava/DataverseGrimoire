---
logical: "msdyn_kpieventdata"
display: "KPI Event Data"
entitySetName: "msdyn_kpieventsdata"
primaryId: "msdyn_kpieventdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# KPI Event Data

Primary entity for a kpi event

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kpieventdata` |
| Display name | KPI Event Data |
| Display (plural) | KPI Event Data |
| Schema name | `msdyn_KPIEventData` |
| Entity set (Web API) | `msdyn_kpieventsdata` |
| Primary id attribute | `msdyn_kpieventdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kpieventsdata?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kpieventsdata(<guid>)
POST /api/data/v9.2/msdyn_kpieventsdata
PATCH /api/data/v9.2/msdyn_kpieventsdata(<guid>)
DELETE /api/data/v9.2/msdyn_kpieventsdata(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalData`, `msdyn_cifSessionId`, `msdyn_ClientSessionId`, `msdyn_ConversationId`, `msdyn_CustomAttribute1`, `msdyn_CustomAttribute2`, `msdyn_CustomAttribute3`, `msdyn_CustomAttribute4`, `msdyn_CustomAttribute5`, `msdyn_EventTimestamp`, `msdyn_ExternalCorrelationId`, `msdyn_KPIEventDataId`, `msdyn_KPIEventId`, `msdyn_KPIEventName`, `msdyn_KPIEventReason`, `msdyn_Name`, `msdyn_ParticipantId`, `msdyn_ProviderId`, `msdyn_ProviderSessionId`, `msdyn_sessionId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_kpieventdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_kpieventdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kpieventdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kpieventdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kpieventdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_kpieventdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_kpieventdata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_kpieventdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kpieventdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_kpieventdata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_kpieventdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kpieventdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kpieventdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_kpieventdata.md) on 2026-05-06.