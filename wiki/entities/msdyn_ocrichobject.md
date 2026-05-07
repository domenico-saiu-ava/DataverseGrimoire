---
logical: "msdyn_ocrichobject"
display: "Rich message"
entitySetName: "msdyn_ocrichobjects"
primaryId: "msdyn_ocrichobjectid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rich message

Rich messages for Omnichannel integration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrichobject` |
| Display name | Rich message |
| Display (plural) | Rich messages |
| Schema name | `msdyn_ocrichobject` |
| Entity set (Web API) | `msdyn_ocrichobjects` |
| Primary id attribute | `msdyn_ocrichobjectid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrichobjects?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocrichobjects(<guid>)
POST /api/data/v9.2/msdyn_ocrichobjects
PATCH /api/data/v9.2/msdyn_ocrichobjects(<guid>)
DELETE /api/data/v9.2/msdyn_ocrichobjects(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_allowagenttoedit`, `msdyn_description`, `msdyn_locale`, `msdyn_name`, `msdyn_objectjson`, `msdyn_ocrichobjectgroupid`, `msdyn_ocrichobjectId`, `msdyn_ocrichobjecttype`, `msdyn_streamsource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_objectjsonfile`, `msdyn_objectjsonfile_Name`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocrichobject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocrichobject_msdyn_objectjsonfile` | [fileattachment](fileattachment.md) | `msdyn_objectjsonfile` | `msdyn_objectjsonfile` |
| `lk_msdyn_ocrichobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrichobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrichobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrichobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocrichobject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocrichobject` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocrichobject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrichobject_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobject_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobject_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocrichobject_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocrichobject_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrichobject_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobject_msdyn_ocrichobjectmap` | _n/a_ | `msdyn_ocmappedrichobjid` | _n/a_ |
| `msdyn_ocrichobject_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrichobject_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobject_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocrichobject_liveworkstream` | [msdyn_ocrichobjectid](msdyn_ocrichobjectid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_ocrichobject_msdyn_octag` | [msdyn_ocrichobjectid](msdyn_ocrichobjectid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocrichobject.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocrichobject.md) on 2026-05-06.