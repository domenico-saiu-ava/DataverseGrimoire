---
logical: "msdyn_bookableresourceassociation"
display: "Associazione risorse prenotabili"
entitySetName: "msdyn_bookableresourceassociations"
primaryId: "msdyn_bookableresourceassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione risorse prenotabili

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookableresourceassociation` |
| Display name | Associazione risorse prenotabili |
| Display (plural) | Associazioni risorse prenotabili |
| Schema name | `msdyn_bookableresourceassociation` |
| Entity set (Web API) | `msdyn_bookableresourceassociations` |
| Primary id attribute | `msdyn_bookableresourceassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookableresourceassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookableresourceassociations(<guid>)
POST /api/data/v9.2/msdyn_bookableresourceassociations
PATCH /api/data/v9.2/msdyn_bookableresourceassociations(<guid>)
DELETE /api/data/v9.2/msdyn_bookableresourceassociations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookableresourceassociationid`, `msdyn_fromdate`, `msdyn_name`, `msdyn_resource1`, `msdyn_resource2`, `msdyn_todate`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bookableresourceassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookableresourceassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookableresourceassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookableresourceassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookableresourceassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookableresourceassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookableresourceassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookableresourceassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_bookableresource_msdyn_bookableresourceassociation_Resource1` | [bookableresource](bookableresource.md) | `msdyn_resource1` | `msdyn_Resource1` |
| `msdyn_bookableresource_msdyn_bookableresourceassociation_Resource2` | [bookableresource](bookableresource.md) | `msdyn_resource2` | `msdyn_Resource2` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresourceassociation_SyncErrors` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_AsyncOperations` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_MailboxTrackingFolders` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_UserEntityInstanceDatas` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `objectid` | `objectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_ProcessSession` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_BulkDeleteFailures` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_PrincipalObjectAttributeAccesses` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `objectid` | `objectid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_DuplicateMatchingRecord` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bookableresourceassociation` |
| `msdyn_bookableresourceassociation_DuplicateBaseRecord` | [msdyn_bookableresourceassociation](msdyn_bookableresourceassociation.md) | `baserecordid` | `baserecordid_msdyn_bookableresourceassociation` |


## Source

Generated from [msdyn_bookableresourceassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookableresourceassociation')) on 2026-05-07.