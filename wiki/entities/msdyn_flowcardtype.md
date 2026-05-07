---
logical: "msdyn_flowcardtype"
display: "flowcardtype"
entitySetName: "msdyn_flowcardtypes"
primaryId: "msdyn_flowcardtypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# flowcardtype

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flowcardtype` |
| Display name | flowcardtype |
| Display (plural) | flowcardtypes |
| Schema name | `msdyn_flowcardtype` |
| Entity set (Web API) | `msdyn_flowcardtypes` |
| Primary id attribute | `msdyn_flowcardtypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flowcardtypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_flowcardtypes(<guid>)
POST /api/data/v9.2/msdyn_flowcardtypes
PATCH /api/data/v9.2/msdyn_flowcardtypes(<guid>)
DELETE /api/data/v9.2/msdyn_flowcardtypes(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actionCommand`, `msdyn_actionname`, `msdyn_cardname`, `msdyn_cardtypeid`, `msdyn_description`, `msdyn_flowcardtypeId`, `msdyn_flowname`, `msdyn_iscdsflow`, `msdyn_isdeleted`, `msdyn_name`, `msdyn_samplebody`, `msdyn_sampletitle`, `msdyn_workflowid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flowcardtype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flowcardtype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flowcardtype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flowcardtype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flowcardtype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_flowcardtype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flowcardtype` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flowcardtype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flowcardtype_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flowcardtype_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flowcardtype_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flowcardtype_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flowcardtype_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flowcardtype_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flowcardtype_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flowcardtype_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_flowcardtype.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_flowcardtype.md) on 2026-05-06.