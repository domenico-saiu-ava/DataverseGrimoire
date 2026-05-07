---
logical: "msfp_customervoiceuseractivity"
display: "Customer Voice user activity"
entitySetName: "msfp_customervoiceuseractivities"
primaryId: "msfp_customervoiceuseractivityid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice user activity

An entity to store the most recent activities of a customer voice user.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_customervoiceuseractivity` |
| Display name | Customer Voice user activity |
| Display (plural) | Customer Voice user activities |
| Schema name | `msfp_customervoiceuseractivity` |
| Entity set (Web API) | `msfp_customervoiceuseractivities` |
| Primary id attribute | `msfp_customervoiceuseractivityid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_customervoiceuseractivities?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
POST /api/data/v9.2/msfp_customervoiceuseractivities
PATCH /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
DELETE /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_customervoiceuseractivityId`, `msfp_name`, `msfp_project`, `msfp_resourceid`, `msfp_resourcename`, `msfp_resourcetype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_customervoiceuseractivity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_customervoiceuseractivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_customervoiceuseractivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_customervoiceuseractivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_customervoiceuseractivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_project_msfp_customervoiceuseractivity_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `owner_msfp_customervoiceuseractivity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_customervoiceuseractivity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_customervoiceuseractivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_customervoiceuseractivity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_customervoiceuseractivity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_customervoiceuseractivity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_customervoiceuseractivity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_customervoiceuseractivity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_customervoiceuseractivity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_customervoiceuseractivity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_customervoiceuseractivity.md) on 2026-05-06.