---
logical: "msdyn_ocexternalcontext"
display: "External context"
entitySetName: "msdyn_ocexternalcontexts"
primaryId: "msdyn_ocexternalcontextid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# External context

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocexternalcontext` |
| Display name | External context |
| Display (plural) | External contexts |
| Schema name | `msdyn_ocexternalcontext` |
| Entity set (Web API) | `msdyn_ocexternalcontexts` |
| Primary id attribute | `msdyn_ocexternalcontextid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocexternalcontexts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
POST /api/data/v9.2/msdyn_ocexternalcontexts
PATCH /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
DELETE /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_authenticationcorrelation`, `msdyn_isauthenticated`, `msdyn_name`, `msdyn_ocexternalcontextId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_transcript`, `msdyn_transcript_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocexternalcontext` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocexternalcontext_msdyn_transcript` | [fileattachment](fileattachment.md) | `msdyn_transcript` | `msdyn_transcript` |
| `lk_msdyn_ocexternalcontext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocexternalcontext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocexternalcontext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocexternalcontext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocexternalcontext` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocexternalcontext` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocexternalcontext` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocexternalcontext_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocexternalcontext_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocexternalcontext_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocexternalcontext_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocexternalcontext_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocexternalcontext_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocexternalcontext_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocexternalcontext_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocexternalcontext_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_msdyn_externalcontext_msdyn_ocexternalcontextid` | _n/a_ | `msdyn_externalcontext` | _n/a_ |


## Source

Generated from [msdyn_ocexternalcontext.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocexternalcontext.md) on 2026-05-06.