---
logical: "cai_ownershiprelation"
display: "Titolarità Rapporto"
entitySetName: "cai_ownershiprelations"
primaryId: "cai_ownershiprelationid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Titolarità Rapporto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_ownershiprelation` |
| Display name | Titolarità Rapporto |
| Display (plural) | Titolarità Rapporti |
| Schema name | `cai_ownershiprelation` |
| Entity set (Web API) | `cai_ownershiprelations` |
| Primary id attribute | `cai_ownershiprelationid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_ownershiprelations?$select=cai_name&$top=10
GET /api/data/v9.2/cai_ownershiprelations(<guid>)
POST /api/data/v9.2/cai_ownershiprelations
PATCH /api/data/v9.2/cai_ownershiprelations(<guid>)
DELETE /api/data/v9.2/cai_ownershiprelations(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_name`, `cai_ownershiprelationid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_ownershiprelation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_ownershiprelation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_ownershiprelation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_ownershiprelation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_ownershiprelation` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_ownershiprelation_SyncErrors` | [cai_ownershiprelation](cai_ownershiprelation.md) | `regardingobjectid` | `regardingobjectid_cai_ownershiprelation` |
| `cai_ownershiprelation_AsyncOperations` | [cai_ownershiprelation](cai_ownershiprelation.md) | `regardingobjectid` | `regardingobjectid_cai_ownershiprelation` |
| `cai_ownershiprelation_MailboxTrackingFolders` | [cai_ownershiprelation](cai_ownershiprelation.md) | `regardingobjectid` | `regardingobjectid_cai_ownershiprelation` |
| `cai_ownershiprelation_UserEntityInstanceDatas` | [cai_ownershiprelation](cai_ownershiprelation.md) | `objectid` | `objectid_cai_ownershiprelation` |
| `cai_ownershiprelation_ProcessSession` | [cai_ownershiprelation](cai_ownershiprelation.md) | `regardingobjectid` | `regardingobjectid_cai_ownershiprelation` |
| `cai_ownershiprelation_BulkDeleteFailures` | [cai_ownershiprelation](cai_ownershiprelation.md) | `regardingobjectid` | `regardingobjectid_cai_ownershiprelation` |
| `cai_ownershiprelation_PrincipalObjectAttributeAccesses` | [cai_ownershiprelation](cai_ownershiprelation.md) | `objectid` | `objectid_cai_ownershiprelation` |
| `cai_ownershiprelation_DuplicateMatchingRecord` | [cai_ownershiprelation](cai_ownershiprelation.md) | `duplicaterecordid` | `duplicaterecordid_cai_ownershiprelation` |
| `cai_ownershiprelation_DuplicateBaseRecord` | [cai_ownershiprelation](cai_ownershiprelation.md) | `baserecordid` | `baserecordid_cai_ownershiprelation` |
| `cai_account_relashionshipid_cai_ownershiprelation` | [cai_ownershiprelation](cai_ownershiprelation.md) | `cai_relashionshipid` | `cai_relashionshipid` |
| `cai_contact_relationshipid_cai_ownershiprelation` | [cai_ownershiprelation](cai_ownershiprelation.md) | `cai_relationshipid` | `cai_relationshipid` |


## Source

Generated from [cai_ownershiprelation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_ownershiprelation')) on 2026-05-07.