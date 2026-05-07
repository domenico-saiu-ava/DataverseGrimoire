---
logical: "synapselinkprofileentitystate"
display: "Synapse Link Profile Entity State"
entitySetName: "synapselinkprofileentitystates"
primaryId: "synapselinkprofileentitystateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Synapse Link Profile Entity State

Runtime state of the Synapse Link entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkprofileentitystate` |
| Display name | Synapse Link Profile Entity State |
| Display (plural) | Synapse Link Profile Entity States |
| Schema name | `synapselinkprofileentitystate` |
| Entity set (Web API) | `synapselinkprofileentitystates` |
| Primary id attribute | `synapselinkprofileentitystateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkprofileentitystates?$select=name&$top=10
GET /api/data/v9.2/synapselinkprofileentitystates(<guid>)
POST /api/data/v9.2/synapselinkprofileentitystates
PATCH /api/data/v9.2/synapselinkprofileentitystates(<guid>)
DELETE /api/data/v9.2/synapselinkprofileentitystates(<guid>)
```

## Attributes

Writable: **31** · Read-only: **8**

### Writable

`additiontime`, `crmrecordcount`, `crmrecordcountmodifiedtime`, `entityname`, `entitysource`, `entitytype`, `importsequencenumber`, `initialsyncdatacompletedtime`, `initialsyncmetadatacreatedtime`, `initialsyncprocesscompletedtime`, `initialsyncstate`, `lakerecordcount`, `lakerecordcountmodifiedtime`, `lastsynceddatatime`, `lastsynceddataversion`, `lastsyncedmetadatatime`, `lastsyncedmetadataversion`, `metadatastate`, `minsynceddataversion`, `name`, `overriddencreatedon`, `profile`, `profileentity`, `sourcerecordcount`, `statecode`, `statuscode`, `synapselinkprofileentitystateid`, `synapsetablecreationstate`, `syncstate`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkprofileentitystate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkprofileentitystate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkprofileentitystate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkprofileentitystate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkprofileentitystate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `entitystate` | [synapselinkprofileentity](synapselinkprofileentity.md) | `profileentity` | `profileentity` |
| `profileentitystates` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkprofileentitystate_SyncErrors` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_DuplicateMatchingRecord` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_DuplicateBaseRecord` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `baserecordid` | `baserecordid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_AsyncOperations` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_MailboxTrackingFolders` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_UserEntityInstanceDatas` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `objectid` | `objectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_ProcessSession` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_BulkDeleteFailures` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_PrincipalObjectAttributeAccesses` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `objectid` | `objectid_synapselinkprofileentitystate` |


## Source

Generated from [synapselinkprofileentitystate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapselinkprofileentitystate')) on 2026-05-07.