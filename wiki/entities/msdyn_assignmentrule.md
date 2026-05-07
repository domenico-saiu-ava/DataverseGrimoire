---
logical: "msdyn_assignmentrule"
display: "Assignment Rule"
entitySetName: "msdyn_assignmentrules"
primaryId: "msdyn_assignmentruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Assignment Rule

Defines criteria based on which Entities are routed to Users or Sales Team

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentrule` |
| Display name | Assignment Rule |
| Display (plural) | assignmentrules |
| Schema name | `msdyn_assignmentrule` |
| Entity set (Web API) | `msdyn_assignmentrules` |
| Primary id attribute | `msdyn_assignmentruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentrules(<guid>)
POST /api/data/v9.2/msdyn_assignmentrules
PATCH /api/data/v9.2/msdyn_assignmentrules(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentrules(<guid>)
```

## Attributes

Writable: **31** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assignmentruleId`, `msdyn_assignmentwindow`, `msdyn_attributefilter`, `msdyn_Description`, `msdyn_DistributeTo`, `msdyn_distributewithavailability`, `msdyn_distributewithcapacity`, `msdyn_distributewithrecordcreation`, `msdyn_DistributionType`, `msdyn_entityfilter`, `msdyn_evaluateentitymatchindataverse`, `msdyn_evaluateownermatchindataverse`, `msdyn_evaluationorder`, `msdyn_matchedrecords`, `msdyn_matchtype`, `msdyn_name`, `msdyn_objecttype`, `msdyn_objecttypecode`, `msdyn_recordcreationwindow`, `msdyn_segmentid`, `msdyn_sellerfilter`, `msdyn_SpecificSellersOrTeams`, `msdyn_triggertype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assignmentrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assignmentrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_segment_msdyn_assignmentrule_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `owner_msdyn_assignmentrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assignmentrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assignmentrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentrule_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_assignmentrule_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_assignmentrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assignmentrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentrule_suggestionassignmentrule_lookup` | _n/a_ | `msdyn_assignmentruleid` | _n/a_ |
| `msdyn_assignmentrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule` | _n/a_ | `msdyn_assignmentruleid` | _n/a_ |


## Source

Generated from [msdyn_assignmentrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assignmentrule.md) on 2026-05-06.