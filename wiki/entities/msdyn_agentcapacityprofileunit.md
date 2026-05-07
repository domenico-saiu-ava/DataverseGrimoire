---
logical: "msdyn_agentcapacityprofileunit"
display: "Agent Capacity Profile Unit"
entitySetName: "msdyn_agentcapacityprofileunits"
primaryId: "msdyn_agentcapacityprofileunitid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Capacity Profile Unit

Agent Capacity Profile Units holds agent’s available capacity for each capacity profile associated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcapacityprofileunit` |
| Display name | Agent Capacity Profile Unit |
| Display (plural) | Agent Capacity Profile Units |
| Schema name | `msdyn_agentcapacityprofileunit` |
| Entity set (Web API) | `msdyn_agentcapacityprofileunits` |
| Primary id attribute | `msdyn_agentcapacityprofileunitid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcapacityprofileunits?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
POST /api/data/v9.2/msdyn_agentcapacityprofileunits
PATCH /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
DELETE /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentcapacityprofileunitId`, `msdyn_agentid`, `msdyn_availablecapacityprofileunits`, `msdyn_capacityprofileid`, `msdyn_consumedcapacityprofileunits`, `msdyn_defaultmaxunits`, `msdyn_isforceassignedprofile`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentcapacityprofileunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentcapacityprofileunit_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcapacityprofileunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcapacityprofileunit_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcapacityprofileunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_capacityprofile_msdyn_agentcapacityprofileunit_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_systemuser_msdyn_agentcapacityprofileunit_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `owner_msdyn_agentcapacityprofileunit` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentcapacityprofileunit` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentcapacityprofileunit` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcapacityprofileunit_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityprofileunit_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentcapacityprofileunit.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentcapacityprofileunit.md) on 2026-05-06.