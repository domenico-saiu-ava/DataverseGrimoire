---
logical: "msdyn_propertylocationassociation"
display: "Associazione ubicazione proprietà"
entitySetName: "msdyn_propertylocationassociations"
primaryId: "msdyn_propertylocationassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione ubicazione proprietà

Acquisisce la relazione tra una proprietà e un'unità funzionale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertylocationassociation` |
| Display name | Associazione ubicazione proprietà |
| Display (plural) | Associazioni ubicazione proprietà |
| Schema name | `msdyn_propertylocationassociation` |
| Entity set (Web API) | `msdyn_propertylocationassociations` |
| Primary id attribute | `msdyn_propertylocationassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertylocationassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
POST /api/data/v9.2/msdyn_propertylocationassociations
PATCH /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_functionallocation`, `msdyn_name`, `msdyn_property`, `msdyn_propertylocationassociationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_propertylocationassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertylocationassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertylocationassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertylocationassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_propertylocationassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_propertylocationassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_propertylocationassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_propertylocationassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_functionallocation_msdyn_propertylocationassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_property_msdyn_propertylocationassociation_Property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_Property` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertylocationassociation_SyncErrors` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_DuplicateMatchingRecord` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_DuplicateBaseRecord` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `baserecordid` | `baserecordid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_AsyncOperations` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_MailboxTrackingFolders` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_UserEntityInstanceDatas` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `objectid` | `objectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_ProcessSession` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_BulkDeleteFailures` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertylocationassociation` |
| `msdyn_propertylocationassociation_PrincipalObjectAttributeAccesses` | [msdyn_propertylocationassociation](msdyn_propertylocationassociation.md) | `objectid` | `objectid_msdyn_propertylocationassociation` |


## Source

Generated from [msdyn_propertylocationassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_propertylocationassociation')) on 2026-05-07.