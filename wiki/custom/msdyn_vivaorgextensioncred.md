---
logical: "msdyn_vivaorgextensioncred"
display: "msdyn_vivaorgextensioncred"
entitySetName: "msdyn_vivaorgextensioncreds"
primaryId: "msdyn_vivaorgextensioncredid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_vivaorgextensioncred

Org level extension credential for Viva apps

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivaorgextensioncred` |
| Display name | msdyn_vivaorgextensioncred |
| Display (plural) | msdyn_vivaorgextensioncred |
| Schema name | `msdyn_vivaorgextensioncred` |
| Entity set (Web API) | `msdyn_vivaorgextensioncreds` |
| Primary id attribute | `msdyn_vivaorgextensioncredid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivaorgextensioncreds?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivaorgextensioncreds(<guid>)
POST /api/data/v9.2/msdyn_vivaorgextensioncreds
PATCH /api/data/v9.2/msdyn_vivaorgextensioncreds(<guid>)
DELETE /api/data/v9.2/msdyn_vivaorgextensioncreds(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_extensionclientid`, `msdyn_extensionname`, `msdyn_extensionproperties`, `msdyn_extensionsecret`, `msdyn_name`, `msdyn_orgid`, `msdyn_producttype`, `msdyn_settingscreatedby`, `msdyn_settingsmodifiedby`, `msdyn_vivaorgextensioncredid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_vivaorgextensioncred_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivaorgextensioncred_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivaorgextensioncred_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivaorgextensioncred_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_vivaorgextensioncred` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivaorgextensioncred_SyncErrors` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_DuplicateMatchingRecord` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_DuplicateBaseRecord` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `baserecordid` | `baserecordid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_AsyncOperations` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_MailboxTrackingFolders` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_UserEntityInstanceDatas` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `objectid` | `objectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_ProcessSession` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_BulkDeleteFailures` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgextensioncred` |
| `msdyn_vivaorgextensioncred_PrincipalObjectAttributeAccesses` | [msdyn_vivaorgextensioncred](msdyn_vivaorgextensioncred.md) | `objectid` | `objectid_msdyn_vivaorgextensioncred` |


## Source

Generated from [msdyn_vivaorgextensioncred (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_vivaorgextensioncred')) on 2026-05-07.