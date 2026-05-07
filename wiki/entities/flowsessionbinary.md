---
logical: "flowsessionbinary"
display: "Flow Session Binary"
entitySetName: "flowsessionbinaries"
primaryId: "flowsessionbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Session Binary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowsessionbinary` |
| Display name | Flow Session Binary |
| Display (plural) | Flow Session Binaries |
| Schema name | `flowsessionbinary` |
| Entity set (Web API) | `flowsessionbinaries` |
| Primary id attribute | `flowsessionbinaryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowsessionbinaries?$select=name&$top=10
GET /api/data/v9.2/flowsessionbinaries(<guid>)
POST /api/data/v9.2/flowsessionbinaries
PATCH /api/data/v9.2/flowsessionbinaries(<guid>)
DELETE /api/data/v9.2/flowsessionbinaries(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`flowsessionbinaryId`, `flowsessionid`, `ImportSequenceNumber`, `metadata`, `MimeType`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Data`, `Data_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowsessionbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_flowsessionbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `flowsession_flowsessionbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |
| `lk_flowsessionbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowsessionbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowsessionbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowsessionbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowsessionbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowsessionbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowsessionbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowsessionbinary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsessionbinary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsessionbinary_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowsessionbinary_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowsessionbinary_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `flowsessionbinary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsessionbinary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowsessionbinary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsessionbinary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowsessionbinary.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowsessionbinary.md) on 2026-05-06.