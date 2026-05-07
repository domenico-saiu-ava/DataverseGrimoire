---
logical: "msdyn_assignmentmap"
display: "Assignment Map"
entitySetName: "msdyn_assignmentmaps"
primaryId: "msdyn_assignmentmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Assignment Map

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentmap` |
| Display name | Assignment Map |
| Display (plural) | Assignmentmaps |
| Schema name | `msdyn_assignmentmap` |
| Entity set (Web API) | `msdyn_assignmentmaps` |
| Primary id attribute | `msdyn_assignmentmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentmaps(<guid>)
POST /api/data/v9.2/msdyn_assignmentmaps
PATCH /api/data/v9.2/msdyn_assignmentmaps(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentmaps(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_applicableforrouting`, `msdyn_assignedticks`, `msdyn_assignmentmapId`, `msdyn_availablecapacity`, `msdyn_isreconcilerequired`, `msdyn_lastreconciledtime`, `msdyn_maxcapacity`, `msdyn_name`, `msdyn_reconciletaskconsumedcapacity`, `msdyn_rulelevelassignedticksjson`, `msdyn_systemuserid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assignmentmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assignmentmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_systemuser_msdyn_msdyn_assignmentmap_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_assignmentmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assignmentmap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assignmentmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentmap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentmap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentmap_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_assignmentmap_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_assignmentmap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentmap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assignmentmap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentmap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_assignmentmap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assignmentmap.md) on 2026-05-06.