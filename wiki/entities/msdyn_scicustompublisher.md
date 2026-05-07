---
logical: "msdyn_scicustompublisher"
display: "Custom Publisher"
entitySetName: "msdyn_scicustompublishers"
primaryId: "msdyn_scicustompublisherid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom Publisher

The publisher of the conversation highlight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scicustompublisher` |
| Display name | Custom Publisher |
| Display (plural) | Custom Publishers |
| Schema name | `msdyn_SciCustomPublisher` |
| Entity set (Web API) | `msdyn_scicustompublishers` |
| Primary id attribute | `msdyn_scicustompublisherid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scicustompublishers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scicustompublishers(<guid>)
POST /api/data/v9.2/msdyn_scicustompublishers
PATCH /api/data/v9.2/msdyn_scicustompublishers(<guid>)
DELETE /api/data/v9.2/msdyn_scicustompublishers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`ImportSequenceNumber`, `msdyn_DisplayName`, `msdyn_EntityImage`, `msdyn_Name`, `msdyn_SciCustomPublisherId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_EntityImage_Timestamp`, `msdyn_EntityImage_URL`, `msdyn_EntityImageId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_scicustompublisher` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_scicustompublisher_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scicustompublisher_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scicustompublisher_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scicustompublisher_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_scicustompublisher` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_scicustompublisher` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_scicustompublisher` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_scicustomemailhighlight_Publisher_m` | _n/a_ | `msdyn_publisher` | _n/a_ |
| `msdyn_msdyn_scicustomhighlight_Publisher_msdyn_` | _n/a_ | `msdyn_publisher` | _n/a_ |
| `msdyn_scicustompublisher_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustompublisher_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustompublisher_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_scicustompublisher_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_scicustompublisher_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustompublisher_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_scicustompublisher_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scicustompublisher_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_scicustompublisher.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_scicustompublisher.md) on 2026-05-06.