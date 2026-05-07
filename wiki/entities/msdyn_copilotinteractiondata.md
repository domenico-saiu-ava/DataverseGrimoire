---
logical: "msdyn_copilotinteractiondata"
display: "Copilot Interaction Data"
entitySetName: "msdyn_copilotinteractiondatas"
primaryId: "msdyn_copilotinteractiondataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot Interaction Data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteractiondata` |
| Display name | Copilot Interaction Data |
| Display (plural) | Copilot Interaction Datas |
| Schema name | `msdyn_copilotinteractiondata` |
| Entity set (Web API) | `msdyn_copilotinteractiondatas` |
| Primary id attribute | `msdyn_copilotinteractiondataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractiondatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractiondatas
PATCH /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_copilotinteractiondataId`, `msdyn_name`, `msdyn_verbatim`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_interactiondata`, `msdyn_interactiondata_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilotinteractiondata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_copilotinteractiondata_msdyn_interactiondata` | [fileattachment](fileattachment.md) | `msdyn_interactiondata` | `msdyn_interactiondata` |
| `lk_msdyn_copilotinteractiondata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteractiondata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteractiondata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteractiondata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_copilotinteractiondata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilotinteractiondata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilotinteractiondata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteractiondata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractiondata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractiondata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotinteractiondata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotinteractiondata_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotinteractiondata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractiondata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotinteractiondata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotinteractiondata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_copilotinteractiondata_msdyn_copilotinteraction_interactiondataid` | _n/a_ | `msdyn_interactiondataid` | _n/a_ |


## Source

Generated from [msdyn_copilotinteractiondata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotinteractiondata.md) on 2026-05-06.